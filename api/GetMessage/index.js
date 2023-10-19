module.exports = async function (context, req) {
  const date = "2023-10-19T17:07:52.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

