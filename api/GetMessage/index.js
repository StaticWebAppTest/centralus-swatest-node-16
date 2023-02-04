module.exports = async function (context, req) {
  const date = "2023-02-04T07:08:11.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

