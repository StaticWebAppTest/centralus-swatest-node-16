module.exports = async function (context, req) {
  const date = "2024-12-23T09:12:55.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

