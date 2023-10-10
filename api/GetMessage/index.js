module.exports = async function (context, req) {
  const date = "2023-10-10T11:07:33.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

