module.exports = async function (context, req) {
  const date = "2023-02-12T15:09:02.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

