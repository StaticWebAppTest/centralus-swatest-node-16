module.exports = async function (context, req) {
  const date = "2023-01-30T17:09:07.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

