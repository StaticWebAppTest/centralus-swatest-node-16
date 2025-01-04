module.exports = async function (context, req) {
  const date = "2025-01-04T09:11:03.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

