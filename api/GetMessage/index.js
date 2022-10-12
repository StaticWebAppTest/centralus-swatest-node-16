module.exports = async function (context, req) {
  const date = "2022-10-12T16:26:52.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

