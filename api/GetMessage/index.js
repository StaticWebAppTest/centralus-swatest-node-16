module.exports = async function (context, req) {
  const date = "2024-03-07T09:07:45.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

