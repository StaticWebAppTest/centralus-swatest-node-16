module.exports = async function (context, req) {
  const date = "2024-03-23T23:08:22.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

