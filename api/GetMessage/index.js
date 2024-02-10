module.exports = async function (context, req) {
  const date = "2024-02-10T08:10:11.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

