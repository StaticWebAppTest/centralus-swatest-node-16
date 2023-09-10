module.exports = async function (context, req) {
  const date = "2023-09-10T07:07:16.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

