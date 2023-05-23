module.exports = async function (context, req) {
  const date = "2023-05-23T23:08:18.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

