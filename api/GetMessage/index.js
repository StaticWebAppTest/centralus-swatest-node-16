module.exports = async function (context, req) {
  const date = "2023-10-24T15:09:45.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

