module.exports = async function (context, req) {
  const date = "2023-10-21T18:10:15.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

