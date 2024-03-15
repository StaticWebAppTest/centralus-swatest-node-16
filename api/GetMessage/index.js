module.exports = async function (context, req) {
  const date = "2024-03-15T02:16:00.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

