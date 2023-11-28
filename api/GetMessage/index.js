module.exports = async function (context, req) {
  const date = "2023-11-28T11:07:51.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

