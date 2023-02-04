module.exports = async function (context, req) {
  const date = "2023-02-04T14:07:57.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

