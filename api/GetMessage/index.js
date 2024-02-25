module.exports = async function (context, req) {
  const date = "2024-02-25T13:09:18.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

