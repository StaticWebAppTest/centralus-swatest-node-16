module.exports = async function (context, req) {
  const date = "2024-02-10T18:10:30.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

