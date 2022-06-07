module.exports = async function (context, req) {
  const date = "2022-06-07T06:13:14.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

