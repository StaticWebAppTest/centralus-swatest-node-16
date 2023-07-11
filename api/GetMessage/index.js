module.exports = async function (context, req) {
  const date = "2023-07-11T11:08:16.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

