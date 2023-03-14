module.exports = async function (context, req) {
  const date = "2023-03-14T11:09:22.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

