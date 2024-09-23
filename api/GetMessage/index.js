module.exports = async function (context, req) {
  const date = "2024-09-23T08:15:40.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

