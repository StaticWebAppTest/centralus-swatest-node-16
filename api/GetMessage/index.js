module.exports = async function (context, req) {
  const date = "2023-02-23T10:10:50.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

