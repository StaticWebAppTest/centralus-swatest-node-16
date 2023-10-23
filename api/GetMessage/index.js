module.exports = async function (context, req) {
  const date = "2023-10-23T13:12:12.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

