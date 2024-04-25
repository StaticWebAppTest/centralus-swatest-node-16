module.exports = async function (context, req) {
  const date = "2024-04-25T11:09:08.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

