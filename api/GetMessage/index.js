module.exports = async function (context, req) {
  const date = "2023-08-02T18:10:25.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

