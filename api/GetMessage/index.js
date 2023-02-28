module.exports = async function (context, req) {
  const date = "2023-02-28T23:10:14.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

