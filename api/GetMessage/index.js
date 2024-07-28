module.exports = async function (context, req) {
  const date = "2024-07-28T16:13:02.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

