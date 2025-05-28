module.exports = async function (context, req) {
  const date = "2025-05-28T08:18:27.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

