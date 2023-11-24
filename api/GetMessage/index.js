module.exports = async function (context, req) {
  const date = "2023-11-24T21:07:45.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

