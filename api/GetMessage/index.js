module.exports = async function (context, req) {
  const date = "2023-10-11T08:12:09.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

