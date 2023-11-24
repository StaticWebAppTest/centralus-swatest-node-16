module.exports = async function (context, req) {
  const date = "2023-11-24T11:07:46.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

