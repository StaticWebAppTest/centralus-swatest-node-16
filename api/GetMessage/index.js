module.exports = async function (context, req) {
  const date = "2023-12-16T06:11:09.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

