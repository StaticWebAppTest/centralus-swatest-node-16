module.exports = async function (context, req) {
  const date = "2023-07-24T09:09:42.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

