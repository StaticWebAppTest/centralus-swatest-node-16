module.exports = async function (context, req) {
  const date = "2023-05-04T09:08:53.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

