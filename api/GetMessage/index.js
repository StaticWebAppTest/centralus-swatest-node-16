module.exports = async function (context, req) {
  const date = "2023-08-22T18:10:16.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

