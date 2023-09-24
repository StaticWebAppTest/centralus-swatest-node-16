module.exports = async function (context, req) {
  const date = "2023-09-24T09:07:32.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

