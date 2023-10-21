module.exports = async function (context, req) {
  const date = "2023-10-21T09:07:45.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

