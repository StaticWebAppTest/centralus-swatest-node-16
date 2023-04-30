module.exports = async function (context, req) {
  const date = "2023-04-30T18:09:52.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

