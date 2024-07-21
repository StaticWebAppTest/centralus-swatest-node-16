module.exports = async function (context, req) {
  const date = "2024-07-21T14:09:09.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

