module.exports = async function (context, req) {
  const date = "2023-12-11T08:13:02.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

