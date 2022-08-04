module.exports = async function (context, req) {
  const date = "2022-08-04T07:09:58.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

