module.exports = async function (context, req) {
  const date = "2024-05-14T04:11:23.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

