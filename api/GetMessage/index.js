module.exports = async function (context, req) {
  const date = "2023-10-14T11:07:05.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

