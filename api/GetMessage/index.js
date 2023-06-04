module.exports = async function (context, req) {
  const date = "2023-06-04T14:07:08.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

