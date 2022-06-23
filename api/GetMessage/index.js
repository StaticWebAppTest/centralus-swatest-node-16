module.exports = async function (context, req) {
  const date = "2022-06-23T08:15:49.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

