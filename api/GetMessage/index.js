module.exports = async function (context, req) {
  const date = "2023-12-10T14:07:47.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

