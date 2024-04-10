module.exports = async function (context, req) {
  const date = "2024-04-10T15:09:23.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

