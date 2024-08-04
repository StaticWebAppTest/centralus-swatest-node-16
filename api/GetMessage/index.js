module.exports = async function (context, req) {
  const date = "2024-08-04T11:09:32.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

