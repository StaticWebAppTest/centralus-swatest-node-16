module.exports = async function (context, req) {
  const date = "2023-09-28T05:08:19.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

