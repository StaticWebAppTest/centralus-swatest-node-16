module.exports = async function (context, req) {
  const date = "2023-10-28T18:10:05.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

