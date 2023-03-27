module.exports = async function (context, req) {
  const date = "2023-03-27T17:08:53.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

